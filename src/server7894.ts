
const express = require('express')
import {handler7894} from "./handler7894";
const app = express()
app.get('/7894', handler7894)
app.listen(3000, () => {})
        