
const express = require('express')
import {handler56} from "./handler56";
const app = express()
app.get('/56', handler56)
app.listen(3000, () => {})
        