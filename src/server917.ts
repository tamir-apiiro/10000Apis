
const express = require('express')
import {handler917} from "./handler917";
const app = express()
app.get('/917', handler917)
app.listen(3000, () => {})
        