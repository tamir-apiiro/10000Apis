
const express = require('express')
import {handler1989} from "./handler1989";
const app = express()
app.get('/1989', handler1989)
app.listen(3000, () => {})
        