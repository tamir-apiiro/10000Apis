
const express = require('express')
import {handler3964} from "./handler3964";
const app = express()
app.get('/3964', handler3964)
app.listen(3000, () => {})
        