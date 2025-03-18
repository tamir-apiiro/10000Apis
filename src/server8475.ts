
const express = require('express')
import {handler8475} from "./handler8475";
const app = express()
app.get('/8475', handler8475)
app.listen(3000, () => {})
        