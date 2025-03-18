
const express = require('express')
import {handler8679} from "./handler8679";
const app = express()
app.get('/8679', handler8679)
app.listen(3000, () => {})
        