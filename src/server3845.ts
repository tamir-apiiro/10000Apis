
const express = require('express')
import {handler3845} from "./handler3845";
const app = express()
app.get('/3845', handler3845)
app.listen(3000, () => {})
        