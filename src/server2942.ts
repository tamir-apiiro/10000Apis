
const express = require('express')
import {handler2942} from "./handler2942";
const app = express()
app.get('/2942', handler2942)
app.listen(3000, () => {})
        