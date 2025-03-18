
const express = require('express')
import {handler7040} from "./handler7040";
const app = express()
app.get('/7040', handler7040)
app.listen(3000, () => {})
        