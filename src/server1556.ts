
const express = require('express')
import {handler1556} from "./handler1556";
const app = express()
app.get('/1556', handler1556)
app.listen(3000, () => {})
        