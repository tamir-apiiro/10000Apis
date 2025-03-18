
const express = require('express')
import {handler1021} from "./handler1021";
const app = express()
app.get('/1021', handler1021)
app.listen(3000, () => {})
        