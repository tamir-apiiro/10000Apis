
const express = require('express')
import {handler3194} from "./handler3194";
const app = express()
app.get('/3194', handler3194)
app.listen(3000, () => {})
        