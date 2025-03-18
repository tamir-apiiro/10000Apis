
const express = require('express')
import {handler1679} from "./handler1679";
const app = express()
app.get('/1679', handler1679)
app.listen(3000, () => {})
        