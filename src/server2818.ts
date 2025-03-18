
const express = require('express')
import {handler2818} from "./handler2818";
const app = express()
app.get('/2818', handler2818)
app.listen(3000, () => {})
        