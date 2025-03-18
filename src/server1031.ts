
const express = require('express')
import {handler1031} from "./handler1031";
const app = express()
app.get('/1031', handler1031)
app.listen(3000, () => {})
        