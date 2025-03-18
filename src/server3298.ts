
const express = require('express')
import {handler3298} from "./handler3298";
const app = express()
app.get('/3298', handler3298)
app.listen(3000, () => {})
        