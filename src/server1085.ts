
const express = require('express')
import {handler1085} from "./handler1085";
const app = express()
app.get('/1085', handler1085)
app.listen(3000, () => {})
        