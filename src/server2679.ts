
const express = require('express')
import {handler2679} from "./handler2679";
const app = express()
app.get('/2679', handler2679)
app.listen(3000, () => {})
        