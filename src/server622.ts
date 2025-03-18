
const express = require('express')
import {handler622} from "./handler622";
const app = express()
app.get('/622', handler622)
app.listen(3000, () => {})
        