
const express = require('express')
import {handler8298} from "./handler8298";
const app = express()
app.get('/8298', handler8298)
app.listen(3000, () => {})
        