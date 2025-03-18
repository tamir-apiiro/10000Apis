
const express = require('express')
import {handler3679} from "./handler3679";
const app = express()
app.get('/3679', handler3679)
app.listen(3000, () => {})
        