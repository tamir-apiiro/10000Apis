
const express = require('express')
import {handler1931} from "./handler1931";
const app = express()
app.get('/1931', handler1931)
app.listen(3000, () => {})
        