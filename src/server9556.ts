
const express = require('express')
import {handler9556} from "./handler9556";
const app = express()
app.get('/9556', handler9556)
app.listen(3000, () => {})
        