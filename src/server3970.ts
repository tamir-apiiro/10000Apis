
const express = require('express')
import {handler3970} from "./handler3970";
const app = express()
app.get('/3970', handler3970)
app.listen(3000, () => {})
        