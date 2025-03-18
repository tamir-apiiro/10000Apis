
const express = require('express')
import {handler7058} from "./handler7058";
const app = express()
app.get('/7058', handler7058)
app.listen(3000, () => {})
        