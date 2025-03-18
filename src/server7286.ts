
const express = require('express')
import {handler7286} from "./handler7286";
const app = express()
app.get('/7286', handler7286)
app.listen(3000, () => {})
        