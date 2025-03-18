
const express = require('express')
import {handler3063} from "./handler3063";
const app = express()
app.get('/3063', handler3063)
app.listen(3000, () => {})
        