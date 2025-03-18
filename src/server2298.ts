
const express = require('express')
import {handler2298} from "./handler2298";
const app = express()
app.get('/2298', handler2298)
app.listen(3000, () => {})
        