
const express = require('express')
import {handler9590} from "./handler9590";
const app = express()
app.get('/9590', handler9590)
app.listen(3000, () => {})
        