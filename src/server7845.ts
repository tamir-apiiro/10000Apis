
const express = require('express')
import {handler7845} from "./handler7845";
const app = express()
app.get('/7845', handler7845)
app.listen(3000, () => {})
        