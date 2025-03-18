
const express = require('express')
import {handler7858} from "./handler7858";
const app = express()
app.get('/7858', handler7858)
app.listen(3000, () => {})
        