
const express = require('express')
import {handler3488} from "./handler3488";
const app = express()
app.get('/3488', handler3488)
app.listen(3000, () => {})
        