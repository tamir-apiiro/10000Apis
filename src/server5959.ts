
const express = require('express')
import {handler5959} from "./handler5959";
const app = express()
app.get('/5959', handler5959)
app.listen(3000, () => {})
        