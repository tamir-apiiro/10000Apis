
const express = require('express')
import {handler6679} from "./handler6679";
const app = express()
app.get('/6679', handler6679)
app.listen(3000, () => {})
        