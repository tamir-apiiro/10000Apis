
const express = require('express')
import {handler7679} from "./handler7679";
const app = express()
app.get('/7679', handler7679)
app.listen(3000, () => {})
        