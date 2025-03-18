
const express = require('express')
import {handler286} from "./handler286";
const app = express()
app.get('/286', handler286)
app.listen(3000, () => {})
        