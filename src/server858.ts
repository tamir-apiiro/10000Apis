
const express = require('express')
import {handler858} from "./handler858";
const app = express()
app.get('/858', handler858)
app.listen(3000, () => {})
        