
const express = require('express')
import {handler1014} from "./handler1014";
const app = express()
app.get('/1014', handler1014)
app.listen(3000, () => {})
        