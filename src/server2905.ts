
const express = require('express')
import {handler2905} from "./handler2905";
const app = express()
app.get('/2905', handler2905)
app.listen(3000, () => {})
        