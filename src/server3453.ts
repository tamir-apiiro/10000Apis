
const express = require('express')
import {handler3453} from "./handler3453";
const app = express()
app.get('/3453', handler3453)
app.listen(3000, () => {})
        