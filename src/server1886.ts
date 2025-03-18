
const express = require('express')
import {handler1886} from "./handler1886";
const app = express()
app.get('/1886', handler1886)
app.listen(3000, () => {})
        