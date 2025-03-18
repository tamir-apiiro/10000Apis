
const express = require('express')
import {handler1970} from "./handler1970";
const app = express()
app.get('/1970', handler1970)
app.listen(3000, () => {})
        