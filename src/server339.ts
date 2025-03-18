
const express = require('express')
import {handler339} from "./handler339";
const app = express()
app.get('/339', handler339)
app.listen(3000, () => {})
        