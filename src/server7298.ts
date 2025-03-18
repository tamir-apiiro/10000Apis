
const express = require('express')
import {handler7298} from "./handler7298";
const app = express()
app.get('/7298', handler7298)
app.listen(3000, () => {})
        