
const express = require('express')
import {handler679} from "./handler679";
const app = express()
app.get('/679', handler679)
app.listen(3000, () => {})
        