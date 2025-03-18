
const express = require('express')
import {handler3031} from "./handler3031";
const app = express()
app.get('/3031', handler3031)
app.listen(3000, () => {})
        