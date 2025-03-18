
const express = require('express')
import {handler7477} from "./handler7477";
const app = express()
app.get('/7477', handler7477)
app.listen(3000, () => {})
        