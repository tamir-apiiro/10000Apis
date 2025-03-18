
const express = require('express')
import {handler2886} from "./handler2886";
const app = express()
app.get('/2886', handler2886)
app.listen(3000, () => {})
        