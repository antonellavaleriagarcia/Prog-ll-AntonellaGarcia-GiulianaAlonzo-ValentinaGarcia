from flask import Blueprint, render_template, redirect, url_for, request, jsonify
import json
from . import db 
from typing import List, Tuple, Any, Dict
from .models import User
from .schemas import UserCreateSchema

user_bp = Blueprint('user_bp', __name__)

@user_bp.route("/")
def index() -> str:
    users: List[Tuple[Any]] = User.query.all()
    return render_template('index.html', users=users)

@user_bp.route('/tienda')
def tienda() -> str:
    return render_template('tienda.html')

@user_bp.route('/blog')
def blog() -> str:
    return render_template('blog.html')

@user_bp.route('/nosotros')
def nosotros() -> str:
    return render_template('nosotros.html')

@user_bp.route('/contacto')
def contacto() -> str:
    return render_template('contacto.html')

@user_bp.route('/users/new')
def new_user_form() -> str:
    return render_template('user_form.html')

@user_bp.route('/users', methods=['POST'])
def create_user() -> str:
    data: Dict[str, str] = request.form

    try:
        user_data=UserCreateSchema(
            first_name=data['first_name'],
            last_name=data['last_name'],
            email=data['email'],
            image_url=data['image_url']
        )
    except ValueError as e:
        return jsonify({"error": str(e)}), 400

    new_user = User(
        first_name=data['first_name'],
        last_name=data['last_name'],
        email=data['email'],
        image_url=data['image_url']
    )

    db.session.add(new_user)
    db.session.commit()

    return render_template('user_item.html', user=new_user)

# EDITAR
@user_bp.route("/users/<int:user_id>/edit")
def edit_user_form(user_id: int) -> str:
    user: User = User.query.get_or_404(user_id)
    return render_template('user_form.html', user=user)

@user_bp.route("/users/<int:user_id>", methods=['DELETE'])
def delete_user(user_id: int) -> str:
    user: User = User.query.get_or_404(user_id)
    
    db.session.delete(user)
    db.session.commit()

    users: List[Tuple[Any]] = User.query.all()
    return redirect(url_for('user_bp.index', users=users))

@user_bp.route("/users/<int:user_id>", methods=['GET', 'POST'])
def update_user(user_id: int) -> str:
    user: User = User.query.get_or_404(user_id)

    if request.method == 'POST':
        data: Dict[str, str] = request.form

        try:
            user_data = UserCreateSchema(
                first_name=data['first_name'],
                last_name=data['last_name'],
                email=data['email'],
                image_url=data['image_url']
            )
        except ValueError as e:
            return jsonify({"error": str(e)}), 400
        
        user.first_name = user_data.first_name
        user.last_name = user_data.last_name
        user.email = user_data.email
        user.image_url = user_data.image_url

        db.session.commit()
        
        return redirect(url_for('user_bp.update_user', user_id=user.id))

    return render_template('user_item.html', user=user)


