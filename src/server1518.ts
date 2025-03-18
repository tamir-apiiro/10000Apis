
const express = require('express')
import {handler1518} from "./handler1518";
const app = express()
app.get('/1518', handler1518)
app.listen(3000, () => {})
        