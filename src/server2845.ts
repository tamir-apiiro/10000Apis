
const express = require('express')
import {handler2845} from "./handler2845";
const app = express()
app.get('/2845', handler2845)
app.listen(3000, () => {})
        