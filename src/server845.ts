
const express = require('express')
import {handler845} from "./handler845";
const app = express()
app.get('/845', handler845)
app.listen(3000, () => {})
        