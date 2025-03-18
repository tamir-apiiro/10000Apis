
const express = require('express')
import {handler772} from "./handler772";
const app = express()
app.get('/772', handler772)
app.listen(3000, () => {})
        